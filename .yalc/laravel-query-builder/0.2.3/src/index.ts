function spatie(url: string) {
  let spatieURL = url;
  const queryParamRegex = /[?&][\w-]+=([\w-]*)/g;

  return {
    when(condition: boolean, callback: (param: any) => any) {
      if (condition) {
        return callback(this);
      }
      return this;
    },
    filter(key: string, value: string) {
      if (spatieURL.match(queryParamRegex)) {
        spatieURL = spatieURL.concat(`&filter[${key}]=${value}`);
      } else {
        spatieURL = spatieURL.concat(`?filter=[${key}]{value}`);
      }
      return this;
    },
    include(...value: any) {
      const regex = /include=([\w,]+)/;
      const match = spatieURL.match(regex);

      if (match) {
        const includes = match[1];
        const includeValues = includes.split(',');
        spatieURL = spatieURL.replace(
          `include=${includeValues}`,
          `include=${Array.from([...includeValues, ...value])}`,
        );
      } else {
        if (spatieURL.match(queryParamRegex)) {
          spatieURL = spatieURL.concat(`&include=${value}`);
        } else {
          spatieURL = spatieURL.concat(`?include=${value}`);
        }
      }
      return this;
    },
    sort(...field: string[]) {
      const regex = /sort=([-?\w,]+)/;
      const match = spatieURL.match(regex);
      if (match) {
        const sort = match[1];
        spatieURL = spatieURL.replace(`sort=${sort}`, `sort=${[sort, field]}`);
      } else {
        if (spatieURL.match(queryParamRegex)) {
          spatieURL = spatieURL.concat(`&sort=${field}`);
        } else {
          spatieURL = spatieURL.concat(`?sort=${field}`);
        }
      }

      return this;
    },
    build() {
      return spatieURL;
    },
  };
}

export {spatie};
