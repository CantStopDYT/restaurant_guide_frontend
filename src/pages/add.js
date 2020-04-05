import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AddForm from "../components/AddForm";


function AddPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `Dayton`,
          `Local Restaurants`,
          `Ordering Guide`,
          `Food`,
          `Brewery`
        ]}
        title="Add your business"
      />

      <section className="text-center flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 py-3">
          Add my business to the guide
        </h2>
        <AddForm />
      </section>
    </Layout>
  );
}

export default AddPage;
