import { supabase } from "../../supabase";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export default async function Todo() {
  const todoItems: any = await supabase.from("todo_items").select();

  return (
    <>
      <h1>My To-do List:</h1>
      <ul>
        {todoItems.data?.map((t: any) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </>
  );
}
