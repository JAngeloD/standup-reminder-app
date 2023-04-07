
interface Props {
  setElapsedTime: (milliseconds: number) => void
  seconds?: number
}

export default function Timer({setElapsedTime, seconds}: Props) {
  var dateStarted = Date.now()

  var interval = setInterval(function() {
    var elapsedTime = Date.now() - dateStarted;
    setElapsedTime(elapsedTime / 1000)
  }, 100);
}
