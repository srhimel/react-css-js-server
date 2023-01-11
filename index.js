import express from 'express'
import FindFiles from 'file-regex'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.get('/cdn/js', async (_, res) => {
  const result = await FindFiles('../dist/assets', /\.js$/)
  res.sendFile(result[0].dir + '/' + result[0].file)
})

app.get('/cdn/css', async (_, res) => {
  const result = await FindFiles('../dist/assets', /\.css$/)
  res.sendFile(result[0].dir + '/' + result[0].file)
})

const PORT = 8080
app.listen(PORT, () => {
  console.log('Example app listening on port ', PORT)
})
