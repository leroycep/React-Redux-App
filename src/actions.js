export const UPDATE_HELLO = "UPDATE_HELLO";

export const updateHello = newHello => {
  return {
    type: UPDATE_HELLO,
    payload: newHello
  };
};
