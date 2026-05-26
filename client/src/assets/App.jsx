export const DEPARTMENTS = [
  "Engineering",
  "Human Resource",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "IT Support",
  "Customer Success",
  "Product Management",
  "Design",
];

export const dummyAdminDashboardData = {
  role: "ADMIN",
  totalEmployees: 3,
  totalDepartments: 10,
  todayAttendance: 1,
  pendingLeaves: 1,
};

export const dummyEmployeeDashboardData = {
  currentMonthAttendance: 20,
  pendingLeaves: 2,
  latestPayslip: {
    netSalary: 2000,
  },
  employee: {
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
    department: "Engineering",
  },
};

export const dummyProfileData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  position: "Software Engineer",
  department: "Engineering",
  joiningDate: "2025-01-15",
  address: "Ahmedabad, Gujarat",
};

export const dummyEmployeeData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    department: "Engineering",
    position: "Software Engineer",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "Active",
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    email: "mike@example.com",
    department: "Finance",
    position: "Financial Analyst",
    status: "On Leave",
  },
];