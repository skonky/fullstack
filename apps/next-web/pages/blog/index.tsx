import { useExampleQuery } from "../../__generated__/graphql-frontend";

export default function Blog() {
  const { data } = useExampleQuery();

  return (
    <div className="container py-3 px-6">
      <h1 className="text-4xl font-extrabold mb-6">Blog</h1>
      <div className="divider"></div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col w-full border-opacity-50">
          <p className="text-lg mb-3 font-bold">Latest articles</p>
          {data?.example?.map((example) => {
            return (
              <div className="text-left mb-6" key={example.id}>
                <a className="link link-hover" href="#">
                  <p className="text-md">{example.name} --&gt;</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <p className="text-lg mb-3 font-bold">Popular articles</p>
          {data?.example?.map((example) => {
            return (
              <div className="text-left mb-6" key={example.id}>
                <a className="link link-hover" href="#">
                  <p className="text-md">{example.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
