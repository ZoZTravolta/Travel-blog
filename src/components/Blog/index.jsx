import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { PageHeader } from "./PageHeader";
import { Pagination } from "./Pagination";
import { BlogItemsList } from "./BlogItemsList";
import { ListContainer } from "./styles";
import { MOCK_DATA } from "../../mockData";
import { TextInput } from "../Inputs/TextInput";

const ITENS_PER_PAGE = 12;
const TOTAL_API_LIMIT = 903;

export function Blog() {
  const [blogItems, setBlogItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  const debouncedSearch = useDebounce(search, 500);

  const hasSearch = !!search.trim("");

  async function getBlogItems() {
    // const response = await axios.get(
    //   "https://api.spoonacular.com/recipes/complexSearch",
    //   {
    //     params: {
    //       query: search,
    //       apiKey: import.meta.env.VITE_API_KEY,
    //       number: hasSearch ? 100 : ITENS_PER_PAGE,
    //       offset: hasSearch ? 0 : ITENS_PER_PAGE * (currentPage - 1),
    //     },
    //   }
    // );

    setBlogItems(MOCK_DATA.results);
  }

  useEffect(() => {
    getBlogItems();
  }, [currentPage]);

  function onPageChange(page) {
    setCurrentPage(page);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    getBlogItems();
  }, [debouncedSearch]);

  return (
    <ListContainer>
      <PageHeader title="Back Home" subtitle="Click on an item to find out more" />
      <TextInput
        onChange={onChangeSearch}
        value={search}
        placeholder="Search here"
        type="search"
      />
      <BlogItemsList blogItems={blogItems} />
      {blogItems.length > 0 && !hasSearch && (
        <Pagination
          totalCountOfRegisters={TOTAL_API_LIMIT}
          currentPage={currentPage}
          onPageChange={onPageChange}
          registerPerPage={ITENS_PER_PAGE}
        />
      )}
    </ListContainer>
  );
}
