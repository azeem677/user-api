import fetch from "node-fetch";

const BASE_URL = "http://localhost:5000/api/users";

async function testUserAPI() {
    console.log("🚀 Starting User API Verification...");

    const testUser = {
        name: "Test User",
        email: `test${Date.now()}@example.com`,
        password: "password123"
    };

    try {
        // 1. Test Signup
        console.log("\n📝 Testing Signup...");
        const signupRes = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(testUser)
        });
        const signupData = await signupRes.json();
        console.log("Signup Response:", signupData);

        if (signupRes.status !== 201) throw new Error("Signup failed");

        // 2. Test Login
        console.log("\n🔑 Testing Login...");
        const loginRes = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: testUser.email,
                password: testUser.password
            })
        });
        const loginData = await loginRes.json();
        console.log("Login Response:", loginData);

        if (loginRes.status !== 200) throw new Error("Login failed");

        // 3. Test Get Users
        console.log("\n👥 Testing Get Users...");
        const usersRes = await fetch(BASE_URL);
        const usersData = await usersRes.json();
        console.log("Users Count:", usersData.length);

        if (usersRes.status !== 200) throw new Error("Get Users failed");

        console.log("\n✅ User API Verification Passed!");
    } catch (error) {
        console.error("\n❌ Verification Failed:", error.message);
    }
}

testUserAPI();
