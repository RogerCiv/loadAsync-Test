import './style.css'

const container = document.getElementById("app");

function loadAsync(src){

  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const img = new Image();
      img.src = src

      img.onload = () => {
        container.innerHTML = ""
        container.appendChild(img)
        resolve(img)
      }
      img.onerror = () => {
        reject(new Error("Error al cargar la imagen"))
      }
    },2000)
  })

}

const imgURL = "https://lh3.googleusercontent.com/pw/ADCreHe0A5uYucs9akx4o9vtdZpIzdKfTcOgb8arpUtvXQO8mH_N9UYG0IfE8Qi3O2YA31iO-tUU6wXnbEeb0GjKe3oHMpQR7mlQ3Xlmxm8J8NXU6-febysJhW2zf-9FhGPIaYA7BTbs3dgbHXyQWmnGqCY_FUFlQR8b2PhiAVukivTR9ly6ssQjwanHVInjP6edUQKUAYNWBBWn-aKJ4G5jT8uMJOl9GLlR-_TGrurXufO0mGTfgCokF0r3jpCmJTIbE01U5YQMfXlXxNVWwvINO3Fk7w99VA33WrRadkxMPII9RU8tnt0M7hh5EMr_WAQeOmM2_-sIAPDHApWdO93I_jVJhsA4RdCOs22h1c0JmW0byEO289q9XTonZfQY4eKZ3GuzX0gs-GKVuPUKFLCJiVPYlbNgMQBR2ySi3HHY7OrsT5RwqNZ6xA6s6qZHEXTWynJnZjHBsan1m1_6J659wvrOJG-1A0gJQilTOUCdL4XKFBUzN39d9FwVFvgtu6QqO7MWB9h_x5hJLIVSClNbEWWqomK-iO4YV9-KBtkFjwAUbgCpp-kkGGlKevGjyNewCTWnVTyN5uwMeoICli3DANT8tfZZujIZfGzmxAAzIK-YPsFAmHFNtBoeh34VkNpDQVZejfc8eb3LLsZoxp99FNynIcCyBnK5E414k8Ceik5linWoS6TF4sIIw6CPYlfAA3Dh5y73X6C0xLv1-4yeAgdQjhI1BkTeSry9fzBbQabTr-LVtZK4Iz3aDj_nCPvG3aB7fP5r6q44vfFRhruUKfrUrJQm3lTMNww0jiMbqr_6Q6hYaowIziPBwjjIUmzC-XN-EgVlKBMHs9d-5VmI062MnomPiO_ydE1Kka7cAmJYncheMnDQ8mYaQISyu3LJXdE4K5B93NB-MwDObd1Nb_ovUIfr1joF3pdaLulq3GRJix3Asu7IGCOk9fsieGukjD98mLO1Z6AhEw=w879-h1172-s-no-gm?authuser=1"

loadAsync(imgURL)
  .then(data => {
    console.log("Cargada",data.src);
  })
  .catch((err) => console.log(err.message))