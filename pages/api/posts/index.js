 

import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../../../utils/firebase';
import { neon } from '@neondatabase/serverless';


export default async function handler(
  req,
  res
) {
  const dbType = req.headers['x-db-type'];
  if (dbType === 'firebase') {
    const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
      });
    res.status(200).json(items)
  } else if (dbType === 'neon') {
    const sql = neon(process.env.NEXT_JS_DATABASE_URL);
    const response = await sql`SELECT * FROM posts`;
    console.log('RESPONSE', response)
    res.status(200).json(response);
  }
}
