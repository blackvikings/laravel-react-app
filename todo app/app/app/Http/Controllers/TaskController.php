<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function show($id)
    {
        return Task::find($id);
    }

    public function store(Request $req)
    {
        return Task::create($req->all());
    }

    public function update(Request $req, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($req->all());

        return $task;
    }

    public function delete(Request $req, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;
    }
}
