import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="bg-white h-screen">

      <section className=" flex flex-col gap-8 p-8">
        <div className=" flex flex-col bg-default-100 p-4 w-162.5 border border-gray-500/20 rounded-lg overflow-hidden">
          <section className="flex items-center justify-between border-b pb-4 border-gray-500/20 ">
            <h1 className="font-semibold text-default-700">නිබන්ධන සම්බන්ධව ගැටළු</h1>
            <button className="bg-default-300 px-4 py-1 font-medium rounded-md">Arrow Down</button>
          </section>
          <section className="mt-4">
            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nostrum obcaecati minima quisquam magni explicabo blanditiis nam exercitationem, praesentium laborum modi facere illo delectus nulla unde earum eum magnam cumque? Et optio sed ipsa, unde sapiente consectetur sint ea, corrupti recusandae rem expedita esse nostrum quis quae dicta, quisquam incidunt dignissimos iusto fugiat itaque accusantium! Modi, laboriosam tempore. Quidem voluptates similique amet quam fuga. Ea repudiandae doloribus illum id vero laborum distinctio quam soluta, expedita numquam itaque, aliquam a adipisci!</p>
          </section>
        </div>

        <div className=" flex flex-col bg-default-100 p-4 w-162.5 border border-gray-500/20 rounded-lg overflow-hidden">
          <section className="flex items-center justify-between border-b pb-4 border-gray-500/20 ">
            <h1 className="font-semibold text-default-700">නිබන්ධන සම්බන්ධව ගැටළු</h1>
            <button className="bg-default-300 px-4 py-1 font-medium rounded-md">Arrow Down</button>
          </section>
          <section className="mt-4">
            <p className="text-sm font-extralight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nostrum obcaecati minima quisquam magni explicabo blanditiis nam exercitationem, praesentium laborum modi facere illo delectus nulla unde earum eum magnam cumque? Et optio sed ipsa, unde sapiente consectetur sint ea, corrupti recusandae rem expedita esse nostrum quis quae dicta, quisquam incidunt dignissimos iusto fugiat itaque accusantium! Modi, laboriosam tempore. Quidem voluptates similique amet quam fuga. Ea repudiandae doloribus illum id vero laborum distinctio quam soluta, expedita numquam itaque, aliquam a adipisci!</p>
          </section>
        </div>
      </section>

      <div className="flex gap-4 p-8">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="secondary-light" className="rounded-md">Arrow Down</Button>
      </div>

      <div className="flex gap-4 p-8 items-center">
        <Input label="Email" placeholder="Enter your email" />

        <Input
          label="Password"
          type="password"
          state="error"
          helperText="Password is too short"
        />

        <Input
          label="Username"
          state="success"
          helperText="Username available"
        />


      </div>
    </main>
  );
}
