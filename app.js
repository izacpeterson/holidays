async function fetchData(url, callback) {
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  callback(jsonData);
}

const TitleBar = {
  template: `
  <header class="p-5 text-center bg-red-900 text-white">
    <h1 class="p-5 text-3xl text-center">Worldwide holidays</h1>
    <h2>By Izac</h2>
  </header>`,
};

const Holiday = {
  template: `
    <main class="bg-gray-100 flex flex-col items-center">
        <input type="date" @change="newDate" id="newDate" class="m-5 p-2"/>
        <ul class="bg-gray-100 flex flex-col items-center">
            <li v-for="holiday in holidays" class="m-2 p-2">
                {{holiday}} 
            </li>
        </ul>
    </main>`,

  data() {
    return {
      holidays: ["test 1 ", "test 2"],
    };
  },
  created() {
    fetchData("https://national-api-day.herokuapp.com/api/today", (data) => {
      console.log(data);
      this.holidays = data.holidays;
    });
  },
  methods: {
    newDate() {
      //   alert("date change");
      let dateInput = document.querySelector("#newDate").value;
      let date = new Date(dateInput);

      fetchData(`https://national-api-day.herokuapp.com/api/date/${date.getMonth() + 1}/${date.getDate() + 1}`, (data) => {
        console.log(data);
        this.holidays = data.holidays || "something went wrong";
      });
    },
  },
};

const app = Vue.createApp({
  components: {
    TitleBar,
    Holiday,
  },
});

app.mount("#app");
