import { rest } from "msw";
import { setupServer } from "msw/node";

const mockedJSON = { data: { id: 83299, name: 'Shoes', brand: 'Van Lier' } };

const server = setupServer(
        rest.get("http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json", (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(mockedJSON));
        })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest }
// export { }