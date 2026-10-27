import React from "react";
import "./PopularCourses.css";

// Şəkillərin import edilməsi
import img1 from "../../assets/div.w-14.png";
import img2 from "../../assets/div.w-14-2.png"
import img3 from "../../assets/div.w-14-3.png"
import img4 from "../../assets/div.w-14-4.png"
const coursesData = [
  {
    id: 1,
    title: "Proqramlaşdırma",
    description: "Web development, Mobile app, Software engineering",
    duration: "6-12 ay",
    image: img1,
  },
  {
    id: 2,
    title: "Qrafik Dizayn",
    description: "Adobe Photoshop, Illustrator, UI/UX dizayn",
    duration: "4-6 ay",
    image: img2,
  },

  {
    id: 3,
    title: "Biznes ve idarətmə",
    description: "Marketinq, HR, Layihə idarəetməsi",
    duration: "3-6 ay",
    image: img3,
  },
 {
    id: 4,
    title: "Xarici Dillər",
    description: "İngilis, Alman, Rus, Türk dilləri",
    duration: "6-12 ay",
    image: img4,
  },
  
];

export default function PopularCourses() {
  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>Populyar Kurslar</h2>
        <p>Ən çox seçilən peşə hazırlıq proqramlarımız</p>
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="icon-wrapper">
              <img src={course.image} alt={course.title} className="course-icon" />
            </div>

            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>

            <div className="course-footer">
              <span className="duration-label">Müddət</span>
              <span className="duration-value">{course.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="button-wrapper">
        <button className="see-all-btn">
          Bütün kursları gör <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
