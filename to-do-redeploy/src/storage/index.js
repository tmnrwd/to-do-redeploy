export function loadState() {

  const serializedState = localStorage.getItem('state');
  if (!serializedState) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export function saveState(state) {

  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
} 

