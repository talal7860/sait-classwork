 
export default function handler(
  req,
  res
) {
  res.status(200).json({ message: `Hello from Next.js!: ${process.env.NEXT_JS_MY_APP_SECRET}` })
}