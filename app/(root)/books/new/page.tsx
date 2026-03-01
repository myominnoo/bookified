import UploadForm from "@/components/UploadForm";
import React from "react";

const Page = () => {
  return (
    <main className="new-book">
      <section className="flex flex-col gap-5 text-center">
        <h1 className="page-title-xl">Add a New Book</h1>
        <p className="subtitle">
          Fill in the details of the new book you want to add to your library.
        </p>
      </section>

      <UploadForm />
    </main>
  );
};

export default Page;
