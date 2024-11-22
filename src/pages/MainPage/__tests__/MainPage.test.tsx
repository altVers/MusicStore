import { render } from "@testing-library/react";
import { MainPage } from "../MainPage";

describe('Текст по отрисовке MainPage', () => {
    test('Текст по отрисовке MainPage', () => {
        expect(render(<MainPage />)).toMatchSnapshot()
    })
})