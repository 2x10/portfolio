document.addEventListener("DOMContentLoaded", () => 
{
    const sections = document.querySelectorAll("section");
    const buttons = document.querySelectorAll(".top-div button");

    if (!sections.length || !buttons.length) 
    {
        console.error("No sections or buttons found!");
        return;
    }

    const observer = new IntersectionObserver
    (
        (entries) => 
        {
            entries.forEach((entry) => 
            {
                if (entry.isIntersecting) 
                {
                    buttons.forEach((btn) => btn.classList.remove("active"));
                    const activeBtn = document.querySelector(`.top-div button[data-target="${entry.target.id}"]`);
                    if (activeBtn) activeBtn.classList.add("active");
                }
            });
        },
        { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));

    buttons.forEach((btn) => 
    {
        btn.addEventListener("click", () => 
        {
            const targetSection = document.getElementById(btn.dataset.target);
            if (targetSection) 
            {
                targetSection.scrollIntoView({ behavior: "smooth" });
            } 
            else 
            {
                console.warn(`No section found with id="${btn.dataset.target}"`);
            }
        });
    });
});