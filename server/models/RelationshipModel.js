import Companies from './CompanyModel.js';
import Packages from './PackageModel.js';
import Users from './UserModel.js';

Companies.belongsTo(Packages, {
    foreignKey: 'package_id'
});
Packages.hasOne(Companies, {
    foreignKey: 'package_id'
});

Companies.belongsTo(Users, {
    foreignKey: 'admin_id'
});
Users.hasOne(Companies, {
    foreignKey: 'admin_id'
});
 
export {Companies, Packages, Users};