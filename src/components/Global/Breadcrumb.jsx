import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = ({ pages }) => {
  return (
    <ChakraBreadcrumb fontWeight="medium" separator={<AiOutlineRight />}>
      {pages?.map((page, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink _hover={{ textColor: "brand.100" }} href={page?.link}>
            {page?.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;
