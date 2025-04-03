// /app/api/hello/route.ts
export async function GET() {
  return new Response(JSON.stringify({ message: "hello world @2" }));
}

export async function POST(request) {
  const newUser = await request.json();
  console.log("NEW_USER", newUser);
  // console.log('ID', id);
  if (newUser.name) {
    // update name in database
    // const result = await db.query("CREATE USER users SET name = ? WHERE id = ?", newUser.name, id);
  }
  return new Response(JSON.stringify({ ...newUser }));
}
