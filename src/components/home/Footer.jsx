import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-10">
      <FooterItem 
        itemTitle="Lorem Ipsum"
        itemDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium consequatur magni delectus, iste minus voluptatibus!"
      />
      <FooterItem 
        itemTitle="Lorem Ipsum"
        itemDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium consequatur magni delectus, iste minus voluptatibus!"
      />
      <FooterItem 
        itemTitle="Lorem Ipsum"
        itemDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium consequatur magni delectus, iste minus voluptatibus!"
      />
    </div>
  )
}
