import { AuthenticationDialog } from "@/components/ui/AuthenticationDialog";

export default function Home() {

  const tasks = [
    { id: 1, title: 'Task One', completed: false },
    { id: 2, title: 'Task Two', completed: true },
    { id: 3, title: 'Task Three', completed: false },
  ]


  return (
<>
    <nav className="flex items-center justify-center">
      <ul className="flex gap-6 p-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <AuthenticationDialog/>
      </ul>

    </nav>

    <div className="flex flex-col gap-8 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl text-center">Hello World!!!!</h1>
        <p className="text-sm text-center max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam tempora consequuntur, quisquam repellat ut aut doloribus. Officia exercitationem aut enim. Consequuntur nobis fuga voluptatum delectus temporibus illo nemo possimus?</p>
      </div>


      <div className="w-2xl">
        {
          tasks.map(task => (
            <div key={task.id} className="w-full p-4 mb-2 text-center border rounded shadow-sm">
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
}
