<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Resources\Comment\CommentResource;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;

class CommentController extends ApiController
{
    /**
     * 分页查询.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $comments = Comment::latest()->paginate(10);

        return CommentResource::collection($comments);
    }

    /**
     * 新增记录.
     *
     * @param CommentRequest $request
     *
     * @return CommentResource
     */
    public function store(CommentRequest $request)
    {
        $comment = new Comment();
        $comment->fill($request->all());
        $comment->save();

        return new CommentResource($comment);
    }

    /**
     * 查看详情.
     *
     * @param $id
     *
     * @return CommentResource
     */
    public function show($id)
    {
        $comment = Comment::findOrFail($id);

        return new CommentResource($comment);
    }

    /**
     * 更新.
     *
     * @param CommentRequest $request
     * @param $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(CommentRequest $request, $id)
    {
        $comment = Comment::findOrFail($id);
        $comment->fill($request->all());
        $comment->save();

        return $this->noContent();
    }

    /**
     * 删除.
     *
     * @param $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return $this->noContent();
    }
}