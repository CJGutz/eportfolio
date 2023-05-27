const AboutInfo = () => {

  const aboutInfoText = "Oh no. I didn't think that you would actually read this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in augue nulla. Fusce fringilla placerat ante vel gravida. Sed elementum porta iaculis. Pellentesque vel justo nibh. Nam lorem lacus, porttitor eget congue a, eleifend sit amet felis. Praesent rutrum tempor egestas. Mauris purus arcu, lobortis quis nibh in, varius malesuada velit."

  return (
    <div className="w-full mt-96 p-10">
      <h1 id="about" className="text-4xl font-bold">About me</h1>
      <p className="p-4">{aboutInfoText}</p>
    </div>
  );
};

export default AboutInfo;
