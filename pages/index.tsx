import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Layout.Content className="flex justify-center flex-col gap-12 items-center">
        <p className="animated-text w-max text-8xl font-black">
          I&apos;m Rohan Shrestha
        </p>
        <p className="text-7xl font-semibold">Fullstack Developer</p>
        <button className="bg-white text-black px-4 py-2.5 text-xl font-medium rounded-md hover:bg-inherit hover:text-white transition-all duration-200 border-white border-[1.5px]">
          whoami
        </button>
      </Layout.Content>
    </Layout>
  );
}
