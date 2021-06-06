let applicationHelper = {};

applicationHelper.isValidEmail = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(email); //if its valid, return true
};

applicationHelper.findParentNodeByClassName = (element, parentNodeClass) => {
  if (element.classList.contains(parentNodeClass)) {
    return element;
  }

  if (element.parentElement.classList.contains(parentNodeClass)) {
    return element.parentElement;
  }
  return applicationHelper.findParentNodeByClassName(
    element.parentElement,
    parentNodeClass
  );
};
export { applicationHelper };
