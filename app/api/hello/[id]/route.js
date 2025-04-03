export async function PATCH(request) {
  // const id = request.query.id;
  const newUser = await request.json();
  console.log("NEW_USER", newUser);
  // console.log('ID', id);
  if (newUser.name) {
    // update name in database
    // const result = await db.query("UPDATE users SET name = ? WHERE id = ?", newUser.name, id);
  }
  return new Response(JSON.stringify({ ...newUser }));
}

export async function DELETE(request, { params }) {
  // const id = request.query.id;
  // const newUser = await request.json();
  const { id } = await params;
  console.log("ID", id);
  console.log("NEW_USER", request.query);
  return new Response(JSON.stringify({ message: "user deleted" }));
}
