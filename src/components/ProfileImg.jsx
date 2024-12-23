const ProfileImg = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div className="w-40 h-40 rounded-full m-4">
        <img src="../../public/profile pic.jpg" className="rounded-full" alt="" />
      </div>
      <h1 className="font-sans  text-2xl text-white text-center font-extrabold tracking-widest">My Website Collections</h1>
    </div>
  );
};

export default ProfileImg;
