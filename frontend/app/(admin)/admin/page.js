import { UserIcon } from "@heroicons/react/24/outline";

export default function Auth() {
  return (
    <div className="w-full h-screen flex items-center justify-center dark:bg-gray-800 bg-gray-200">
      <div>
        <UserIcon className="size-6 text-blue-500" />
        Hello Next!!!
      </div>
    </div>
  );
}
