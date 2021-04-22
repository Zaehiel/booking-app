export type ResponseItem = {
  id: number,
  name: string,
  available: boolean,
  image
  : string,
}

export type Response = {
  data: ResponseItem[],
}
export const api = () => new Promise<Response>((resolve) => {
  setTimeout(() => {
    resolve({
      data:[
        {"id":1,"name":"Cheap room","available":true,"image":"https://via.placeholder.com/400x200.png?text=Cheap%20room"},
        {"id":2,"name":"Not so cheap room","available":false,"image":"https://via.placeholder.com/400x200.png?text=Not%20so%20cheap%20room"},
        {"id":3,"name":"Expensiveroom","available":true,"image":"https://via.placeholder.com/400x200.png?text=Expensive%20room"}
      ]
    });
  }, 267);
});