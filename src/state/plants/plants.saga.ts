import { all, call, fork, put, takeLatest, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { PlantProps } from "@/state/plants/plants.types";
import * as plantAPI from "@/api";
import * as plantActions from "@/state/plants/plants.slice";

function* getAllPlantsSaga() {
  try {
    const plantsArray: PlantProps[] = yield call(plantAPI.apiGetPlants);
    yield put(plantActions.getAllPlantsFulfilled(plantsArray));
    yield put(plantActions.handleSuccessfulRequest());
  } catch (e) {
    yield put(plantActions.handleFailedRequest());
    console.error(e);
  }
}

function* addPlantSaga(action: PayloadAction<PlantProps>) {
  try {
    yield call(plantAPI.apiAddPlant, action.payload);
    yield put(plantActions.addPlantFulfilled(action.payload));
    yield put(plantActions.handleSuccessfulRequestCard());
  } catch (e) {
    yield put(plantActions.handleFailedRequestCard());
    console.error(e);
  }
}

function* getPlantSaga(action: PayloadAction<string>) {
  try {
    const plant: PlantProps = yield call(
      plantAPI.apiGetPlantById,
      action.payload,
    );
    yield put(plantActions.getPlantByIdFulfilled(plant));
    yield put(plantActions.handleSuccessfulRequest());
  } catch (e) {
    yield put(plantActions.handleFailedRequest());
    console.error(e);
  }
}

function* deletePlantSaga(action: PayloadAction<string>) {
  try {
    yield call(plantAPI.apiDeletePlant, action.payload);
    yield put(plantActions.deletePlantByIdFulfilled(action.payload));
    yield put(plantActions.handleSuccessfulRequestCard());
  } catch (e) {
    yield put(plantActions.handleFailedRequestCard());
    console.error(e);
  }
}

function* updatePlantSaga(action: PayloadAction<PlantProps>) {
  try {
    yield call(plantAPI.apiUpdatePlant, action.payload);
    yield put(plantActions.updatePlantByIdFulfilled(action.payload));
    yield put(plantActions.handleSuccessfulRequestCard());
  } catch (e) {
    yield put(plantActions.handleFailedRequestCard());
    console.error(e);
  }
}

function* watcherSaga() {
  yield all([
    takeLatest(plantActions.getAllPlants.type, getAllPlantsSaga),
    takeEvery(plantActions.addPlant.type, addPlantSaga),
    takeLatest(plantActions.deletePlantById.type, deletePlantSaga),
    takeLatest(plantActions.updatePlantById.type, updatePlantSaga),
    takeLatest(plantActions.getPlantById.type, getPlantSaga),
  ]);
}

export default function* rootSaga() {
  yield fork(watcherSaga);
}
