import { getData } from '../pages/api/product/product';
import { server, rest } from "../pages/testServer/testServer";

const mockedJSON = { data: { id: 83299, name: 'Shoes', brand: 'Van Lier' } };

it('REST API AXIOS Call behaves correctly', async () => {
        const result = await getData('http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json');
        // console.log(result);
        expect(result).toEqual(mockedJSON);
});

it('REST API AXIOS error handler', async () => {
        server.use(
                rest.get("http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json", (req, res, ctx) => {
                        return res(ctx.status(404));
                })
        );

        const result = await getData('http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json');
        // console.log(result);

        await expect(getData('http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json')).resolves.toThrow('404');
});  