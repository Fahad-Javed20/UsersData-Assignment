import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    console.log("User Added:", data);
    reset()
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-96">
        <h1 className="font-bold text-xl text-center mb-5">Add New User</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white shadow-2xl rounded-2xl space-y-5"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-lg outline-none"
            />
            {errors.name && <p className="text-red-500">Name is Required</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter your Email"
              className="w-full border px-3 py-2 rounded-lg outline-none"
            />
            {errors.email && <p className="text-red-500">Email is Required</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Phone No</label>
            <input
              {...register("phone", { required: true })}
              placeholder="Enter your Phone"
              className="w-full border px-3 py-2 rounded-lg outline-none"
            />
            {errors.phone && (
              <p className="text-red-500">Phone Number is Required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
