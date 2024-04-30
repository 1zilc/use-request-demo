import { useRequest, useBoolean } from "ahooks";

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 0);
  });
}
export default () => {
  const { data } = useRequest(getData, {
    cacheKey: "key",
    cacheTime: -1,
  });

  return <div> {data}</div>;
};
