const getCalculate = () => {
  let fahrenheitTemperature = document.getElementById('fahrenheit').value
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fahrenheitTemperature === '') {
        reject('Debes ingresar un número')
      }
      resolve(((5/9)*(fahrenheitTemperature - 32)).toFixed(2))
    }, 3000)
  })
}

const getResult = async () => {
  let result = document.getElementById('result')
  result.innerHTML = 'Calculando temperatura...'
  await getCalculate().then(
    (celcius) => {
      result.innerHTML = `${celcius} C°`
    }
  ).catch(
    (error) => {
      result.innerHTML = error
    }
  )
}