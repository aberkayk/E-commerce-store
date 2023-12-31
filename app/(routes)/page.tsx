import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard(
    "23a6a834-4f4b-4066-9af7-cf8820150ce2"
  );
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
