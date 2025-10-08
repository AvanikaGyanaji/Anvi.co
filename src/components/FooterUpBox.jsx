export const FooterUpBox = (head,para,linkLabel,link) => {
    console.log(head, para, linkLabel, link)
    return (
        <section className="w-full min-h-[376px] max-h-auto flex flex-col justify-center align-middle gap-">
            <div className="absolute h-auto w-full top-0 left-0 bg-cover bg-no-repeat" style={{
                backgroundImage: "url('/images/footer.jpg')"
            }}></div>
            <div className="">

            </div>
        </section>
    )
}