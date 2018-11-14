function getRealTime(){
  const date = new Date();
  const realTime = `${date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}`
  return realTime;
}

export default getRealTime;