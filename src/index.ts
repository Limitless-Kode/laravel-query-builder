function spatie(url: string) {
  let spatieURL = url;
  const queryParamRegex = /[?&][\w-]+=([\w-]*)/g;

  return {
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
        const inludes = match[1];
        const includeValues = inludes.split(',');
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
    sort(field: string, asc: boolean = true) {
      const regex = /sort=([-?\w,]+)/;
      const match = spatieURL.match(regex);
      const prefix = asc ? '' : '-';
      if (match) {
        const sort = match[1];
        spatieURL = spatieURL.replace(`sort=${sort}`, `sort=${prefix.concat(field)}`);
      } else {
        if (spatieURL.match(queryParamRegex)) {
          spatieURL = spatieURL.concat(`&sort=${prefix.concat(field)}`);
        } else {
          spatieURL = spatieURL.concat(`?sort=${prefix.concat(field)}`);
        }
      }

      return this;
    },
    build() {
      return spatieURL;
    },
  };
}

export default spatie;
