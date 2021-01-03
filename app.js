const scada_api = require('./odbc')
const config = require('config');
const test_db_config = require('./config')

const update_timeout_ms = config.get('update_timeout_ms')

const systems = test_db_config.ReadConfig()

const StartUpdate = async () => {
//  let res = await odbcSelect()
//  rtvalue = res[0]
  console.log("rtvalue")
  timer = setTimeout(() => StartUpdate(), update_timeout_ms)
};

ProcessSystems(systems);

function ProcessSystems(systems) {
  systems.forEach(system => {
    ProcessSystem(system)   
  });
}

function ProcessSystem(system) {
  //connect
  //request list
  //disconnect

  //upsert in scada
}