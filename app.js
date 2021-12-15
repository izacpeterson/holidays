async function fetchData(url, callback) {
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  callback(jsonData);
}

const TitleBar = {
  template: `<h1>Worldwide holidays</h1>`,
};

const Holiday = {
  template: `
  <input type="date" @change="newDate" id="newDate"/>
    <li v-for="holiday in holidays">
        {{holiday}}
    </li>`,

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
