import { createElement } from 'react';
import { render } from 'react-dom';

import Stateless from './components/Stateless';
import Stateful from './components/Stateful';
import Pure from './components/Pure';
import PureFnInRender from './components/PureFnInRender';
import PureFnOutRender from './components/PureFnOutRender';

const max = 10000;
/*
starts

for each component type
  iterates 10000 times creating a component each time

  sleep for 1 sec
end
*/
const components = [Stateless, Stateful, Pure, PureFnInRender, PureFnOutRender];

function* cmpCycle(comps) {
  yield* comps;
}

const cmpSwitcher = cmpCycle(components);

const renderComponent = (Component, i) => {
  render(
    createElement(Component, { i }),
    document.getElementById('root'),
  );
};

function performanceTest(cmp) {
  if (!cmp) {
    return;
  }
  let iterations = max;
  console.log(`%cTesting componenent ${cmp.name}`, 'color: green; font-weight: bold;');
  const prevTime = performance.now();
  while (iterations--) {
    renderComponent(cmp, iterations);
  }
  console.log(`Time: %c${Math.round(performance.now() - prevTime)}ms`, 'color:blue');

  setTimeout(evaluateNextComponent, 500);
}

function evaluateNextComponent() {
  performanceTest(cmpSwitcher.next().value);
}

console.log(`Starting ${max} tests with %cReact 16 (Fiber)...`, 'font-weight: bold');
evaluateNextComponent();
