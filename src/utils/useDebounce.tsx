const debounce = (func: (e: string) => void, delay: number) => {
  let setTimoutInstance = 0;
  return function () {
    //@ts-ignore
    const self = this;
    const args: any = arguments;
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    setTimoutInstance = window.setTimeout(() => func.apply(self, args), delay);
  };
};

export default debounce;
