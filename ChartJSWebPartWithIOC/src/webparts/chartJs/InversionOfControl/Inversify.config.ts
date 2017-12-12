import { Container } from "inversify";
import {IDataSource} from "../Services/IDataSource";
import MockDataSource from "../Services/MockDataSource";
import MockDataSourceForTestIOC from "../Services/MockDataSourceForTestIOC";

var kernel = new Container();
//kernel.bind<IDataSource>("IDataSource").to(MockDataSource);
kernel.bind<IDataSource>("IDataSource").to(MockDataSourceForTestIOC);
export default kernel;