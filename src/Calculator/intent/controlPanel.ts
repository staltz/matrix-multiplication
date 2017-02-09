import xs, {Stream} from 'xstream';
import {DOMSource} from '@cycle/dom';
import {
  Action,
  StartMultiplyAction,
  NextStepAction,
  ResetAction,
  EndAction,
} from '../model/actions';

export function controlPanelIntent(domSource: DOMSource): Stream<Action> {
  const startMultiplyAction$ = domSource.select('.multiply').events('click')
    .mapTo({ type: 'START_MULTIPLY', payload: null } as StartMultiplyAction);

  const nextStepAction$ = domSource.select('.next').events('click')
    .mapTo({ type: 'NEXT_STEP', payload: null } as NextStepAction);

  const endAction$ = domSource.select('.end').events('click')
    .mapTo({ type: 'END', payload: null } as EndAction);

  const resetAction$ = domSource.select('.reset').events('click')
    .mapTo({ type: 'RESET', payload: null } as ResetAction);

  return xs.merge(
    startMultiplyAction$,
    nextStepAction$,
    endAction$,
    resetAction$,
  );
}