export const getImageUri = (id: string) => {
  return `https://picsum.photos/1${+id < 10 ? +id + 10 : id}`;
};
