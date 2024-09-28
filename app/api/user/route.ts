import client from "@/app/db";

export async function GET() {
  return Response.json({
    name: "Suryadev Pandey",
    email: "suryadev@gmail.com",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const findUser = await client.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (findUser) {
      return Response.json(
        {
          message: "User already exists",
          user: findUser,
        },
        { status: 409 }
      );
    }
    const createUser = await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    // Here you would typically process the data, e.g., save to database
    return Response.json(
      {
        message: "User created successfully",
        user: createUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error processing request",
        error: error,
      },
      { status: 400 }
    );
  }
}
