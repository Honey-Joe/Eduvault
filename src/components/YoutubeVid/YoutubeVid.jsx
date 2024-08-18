

const YoutubeVid = () => {
  return (
    <>
      <div className='2xl:container'>
        <div className='w-[90%] xl:w-[78%] grid grid-cols-1 mx-auto my-11'>
            <div>
            <iframe width="730" height="375" src="https://www.youtube.com/embed/yGDwk4z9EEg?si=rQYzUflfXOOcIjTR" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen className="w-[100%] xl:w-[70%]"></iframe>
            </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeVid
